package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/bud-characteristics-sdk/go"
	"github.com/voxgig-sdk/bud-characteristics-sdk/go/core"

	vs "github.com/voxgig-sdk/bud-characteristics-sdk/go/utility/struct"
)

func TestRetrieveCustomerCharacteristicEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RetrieveCustomerCharacteristic(nil)
		if ent == nil {
			t.Fatal("expected non-nil RetrieveCustomerCharacteristicEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"retrieve_customer_characteristic": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.RetrieveCustomerCharacteristic(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.RetrieveCustomerCharacteristic(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := retrieve_customer_characteristicBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "retrieve_customer_characteristic." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set BUD_CHARACTERISTICS_TEST_RETRIEVE_CUSTOMER_CHARACTERISTIC_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		retrieveCustomerCharacteristicRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.retrieve_customer_characteristic")))
		var retrieveCustomerCharacteristicRef01Data map[string]any
		if len(retrieveCustomerCharacteristicRef01DataRaw) > 0 {
			retrieveCustomerCharacteristicRef01Data = core.ToMapAny(retrieveCustomerCharacteristicRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = retrieveCustomerCharacteristicRef01Data

		// LIST
		retrieveCustomerCharacteristicRef01Ent := client.RetrieveCustomerCharacteristic(nil)
		retrieveCustomerCharacteristicRef01Match := map[string]any{}

		retrieveCustomerCharacteristicRef01ListResult, err := retrieveCustomerCharacteristicRef01Ent.List(retrieveCustomerCharacteristicRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, retrieveCustomerCharacteristicRef01ListOk := retrieveCustomerCharacteristicRef01ListResult.([]any)
		if !retrieveCustomerCharacteristicRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", retrieveCustomerCharacteristicRef01ListResult)
		}

		// LOAD
		retrieveCustomerCharacteristicRef01MatchDt0 := map[string]any{}
		retrieveCustomerCharacteristicRef01DataDt0Loaded, err := retrieveCustomerCharacteristicRef01Ent.Load(retrieveCustomerCharacteristicRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if retrieveCustomerCharacteristicRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func retrieve_customer_characteristicBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "retrieve_customer_characteristic", "RetrieveCustomerCharacteristicTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read retrieve_customer_characteristic test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse retrieve_customer_characteristic test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"retrieve_customer_characteristic01", "retrieve_customer_characteristic02", "retrieve_customer_characteristic03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("BUD_CHARACTERISTICS_TEST_RETRIEVE_CUSTOMER_CHARACTERISTIC_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"BUD_CHARACTERISTICS_TEST_RETRIEVE_CUSTOMER_CHARACTERISTIC_ENTID": idmap,
		"BUD_CHARACTERISTICS_TEST_LIVE":      "FALSE",
		"BUD_CHARACTERISTICS_TEST_EXPLAIN":   "FALSE",
		"BUD_CHARACTERISTICS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["BUD_CHARACTERISTICS_TEST_RETRIEVE_CUSTOMER_CHARACTERISTIC_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["BUD_CHARACTERISTICS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["BUD_CHARACTERISTICS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewBudCharacteristicsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["BUD_CHARACTERISTICS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["BUD_CHARACTERISTICS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
