#!/usr/bin/env python3
"""Copy the Terra Faction UI vanilla starter into an empty destination."""

from __future__ import annotations

import argparse
import re
import shutil
from pathlib import Path


FACTIONS = (
    "rhine-lab",
    "lungmen-municipal",
    "kazimierz-broadcast",
    "laterano-notarial",
    "siracusa-dossier",
    "kjerag-alpine",
    "iberia-nautical",
    "yan-archival",
    "leithanien-conservatory",
    "penguin-logistics-street",
    "blacksteel-contract",
    "ursus-student",
)

DEPTHS = ("minimal", "moderate", "complex", "maximal")

PROFILES = {
    "rhine-lab": {
        "data-terra-element": "sample-provenance-capsule",
        "data-terra-layout": "instrument-bench",
        "data-terra-interaction": "diagnostic-plate-2px",
        "data-terra-control": "tolerance-caliper",
    },
    "lungmen-municipal": {
        "data-terra-element": "route-gate-permit",
        "data-terra-layout": "civic-gate-axis",
        "data-terra-interaction": "civic-gate-chamfer",
        "data-terra-control": "ward-gate-matrix",
    },
    "kazimierz-broadcast": {
        "data-terra-element": "live-cut-matrix",
        "data-terra-layout": "broadcast-zones",
        "data-terra-interaction": "broadcast-wedge",
        "data-terra-control": "side-ownership-switch",
    },
    "laterano-notarial": {
        "data-terra-element": "witness-covenant-band",
        "data-terra-layout": "symmetrical-reading-paper",
        "data-terra-interaction": "authority-capsule-double-ring",
        "data-terra-control": "witness-pair-toggle",
    },
    "siracusa-dossier": {
        "data-terra-element": "provenance-tabs",
        "data-terra-layout": "layered-evidence-desk",
        "data-terra-interaction": "docket-tab-folded-edge",
        "data-terra-control": "docket-leaf-tabs",
    },
    "kjerag-alpine": {
        "data-terra-element": "altitude-threshold-ribbon",
        "data-terra-layout": "elevation-ascent",
        "data-terra-interaction": "woven-gate-stitched",
        "data-terra-control": "stitched-weather-gates",
    },
    "iberia-nautical": {
        "data-terra-element": "verified-heading-scale",
        "data-terra-layout": "radial-chart-watch",
        "data-terra-interaction": "porthole-plaque",
        "data-terra-control": "drift-trim-wheel",
    },
    "yan-archival": {
        "data-terra-element": "annotation-margin",
        "data-terra-layout": "scroll-annotation-margin",
        "data-terra-interaction": "folded-record-seal-press",
        "data-terra-control": "seal-press",
    },
    "leithanien-conservatory": {
        "data-terra-element": "cue-ownership-ledger",
        "data-terra-layout": "measured-sequence-field",
        "data-terra-interaction": "cadence-control",
        "data-terra-control": "cadence-stepper",
    },
    "penguin-logistics-street": {
        "data-terra-element": "removable-waybill-stub",
        "data-terra-layout": "diagonal-handoff-lane",
        "data-terra-interaction": "removable-ticket",
        "data-terra-control": "courier-relay-rail",
    },
    "blacksteel-contract": {
        "data-terra-element": "contract-readiness-lock",
        "data-terra-layout": "protected-equipment-rack",
        "data-terra-interaction": "industrial-lock-plate",
        "data-terra-control": "equipment-bay-shutters",
    },
    "ursus-student": {
        "data-terra-element": "supply-responsibility-checklist",
        "data-terra-layout": "repaired-shared-document",
        "data-terra-interaction": "repaired-paper-control",
        "data-terra-control": "shared-supply-tabs",
    },
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--faction", choices=FACTIONS, default="rhine-lab")
    parser.add_argument("--depth", choices=DEPTHS, default="moderate")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    skill_root = Path(__file__).resolve().parent.parent
    starter = skill_root / "assets" / "starter"
    destination = args.destination.expanduser().resolve()

    if destination == starter or starter in destination.parents:
        raise SystemExit("Destination must be outside the bundled starter.")

    if destination.exists() and any(destination.iterdir()):
        raise SystemExit(f"Destination is not empty: {destination}")

    destination.mkdir(parents=True, exist_ok=True)
    shutil.copytree(starter, destination, dirs_exist_ok=True)

    index_path = destination / "index.html"
    index = index_path.read_text(encoding="utf-8")
    index = re.sub(
        r'data-terra-faction="[^"]+"',
        f'data-terra-faction="{args.faction}"',
        index,
        count=1,
    )
    index = re.sub(
        r'data-terra-depth="[^"]+"',
        f'data-terra-depth="{args.depth}"',
        index,
        count=1,
    )
    for attribute, value in PROFILES[args.faction].items():
        index = re.sub(
            rf'{attribute}="[^"]+"',
            f'{attribute}="{value}"',
            index,
            count=1,
        )
    index = re.sub(r"(<option\b[^>]*?)\s+selected(?=>)", r"\1", index)
    index = index.replace(
        f'<option value="{args.faction}">',
        f'<option value="{args.faction}" selected>',
        1,
    )
    index = index.replace(
        f'<option value="{args.depth}">',
        f'<option value="{args.depth}" selected>',
        1,
    )
    index_path.write_text(index, encoding="utf-8")

    print(f"Created Terra Faction UI starter at {destination}")
    print(f"Faction: {args.faction}")
    print(f"Depth: {args.depth}")
    if args.depth in {"complex", "maximal"}:
        print(
            "Next: implement the complete traditional-control contract; "
            "the starter supplies the faction shell and signature mechanic."
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
