# Faction signature control catalog

Use this catalog on every invocation at `moderate` depth or above. It extends the shared checkbox, range, selector, and primary-action grammar with controls whose mechanics reflect how the selected institution handles real work.

## Selection rules

- At `moderate`, implement at least one signature control in addition to the ordinary binary and continuous/stepped controls when the task supports them.
- At `complex` and `maximal`, implement at least two signature controls with different mechanics. Two differently styled segmented buttons do not count as two mechanics.
- Choose controls by task semantics, not visual novelty. A route screen needs gates, bearings, windows, or handoffs; a dossier needs provenance, comparison, ruling, or approval.
- Keep native semantics whenever possible: `button`, `input`, `select`, `output`, `meter`, `progress`, and `fieldset`. Use `aria-pressed`, `aria-expanded`, `aria-valuenow`, and live status only when their state truly applies.
- Every control must expose hover, focus, pressed, selected, disabled, and committed states where relevant. Selection must remain legible without color.
- Do not turn decorative faction motifs into controls. A seal press must commit a record; a bearing dial must change a real heading; a perforated stub must own a handoff.

## Rhine Lab — calibrated instruments

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Sample chamber selector | choose the specimen or experiment under review | crisp specimen tabs slide into a bounded chamber rail; the selected chamber gains a measured inset boundary |
| Tolerance caliper | adjust an allowed numeric band | paired decrement/increment jaws close around an `output`; invalid limits stop mechanically without bounce |
| Calibration stepper | advance a documented review stage | numbered diagnostic plates move inward one step and preserve the exact current stage |
| Containment latch | arm or release a prerequisite | two-stage latch exposes `safe`, `armed`, or `blocked`; the blocked state names the unmet condition |

Avoid soft pills, liquid toggles, and animated laboratory decoration without a measured value.

## Lungmen — civic routing and permits

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Ward gate matrix | choose an active gate or district owner | clipped civic blocks move along the route axis; jade marks ownership and vermilion appears only on commitment |
| Route priority latch | reorder emergency precedence | a stepped three-position rail shows the current precedence and keeps medical priority explicit |
| Permit punch | validate a route or entry permit | one deliberate press removes a corner notch from the pending permit and records time/status in text |
| Queue diverter | send a case to another district lane | an L-shaped switch exposes origin and destination rather than behaving like a generic toggle |

Use Chinese administrative hierarchy through labels, reading order, and gate structure; do not reduce the family to red seals.

## Kazimierz — broadcast ownership

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Side-ownership switch | select which competitor/team owns the analysis view | opposing wedges meet at the center line; the selected side gains a score rail |
| Replay shuttle | scrub a recorded segment | a broad lower-third thumb snaps to meaningful event marks and exposes timecode |
| Bracket lock | promote or lock a tournament branch | connected bracket nodes close horizontally; unavailable branches state the prerequisite |
| Lower-third fader | choose broadcast information density | three stepped broadcast bars change the real overlay density, never arbitrary opacity |

Avoid heraldic shields and medieval ornament; build from competitive broadcast grammar.

## Laterano — authority and witnessed approval

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Covenant ring | select the current party, witness, or approval stage | restrained ring segments contract symmetrically and use a double boundary for the active authority |
| Exception aperture | reveal and classify an exception | an arched disclosure opens a bounded exception panel and keeps its severity label visible |
| Witness pair toggle | confirm that both required statements are present | two linked controls must resolve independently before the center approval state becomes available |
| Radial approval stage | advance a formal review sequence | discrete stages orbit a readable center label; keyboard order remains linear and predictable |

Reserve the strongest capsule and double ring for actual authority. Do not make every surface circular.

## Siracusa — dossiers and provenance

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Docket leaf tabs | switch between evidence, testimony, chronology, and ruling | layered file tabs settle downward; the active leaf advances one ruling edge |
| Provenance hinge | disclose a record’s source chain | a folded-corner control opens an adjacent source panel without covering the evidence |
| Testimony comparator | compare two statements at the same time point | paired vertical leaves keep both speakers and differences visible |
| Ruling pull-tab | commit a recommendation | a deliberate downward pull reaches a stable ruled position and then reports the committed outcome |

Avoid noir gloss, red string boards, and decorative case numbers.

## Kjerag — routes, weather gates, and woven thresholds

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Stitched weather gate | enable route conditions that are currently satisfied | woven tiles tighten their dashed boundary when verified; unsafe gates remain readable and disabled |
| Altitude knot slider | set an altitude or acclimation threshold | the thumb is a bounded knot on a vertical/ascent rail with exact numeric output |
| Route rope selector | choose one of several mountain paths | connected nodes show continuity, elevation, and closed segments instead of isolated buttons |
| Departure-window fold | open or close a safe departure window | a textile-like fold exposes the remaining time and closes vertically when expired |

Avoid generic frosted-glass snow UI. The controls should feel constructed, maintained, and weather-aware.

## Iberia / Aegir — navigation and watchkeeping

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Bearing dial | set or verify course | a real dial/slider pairing exposes degrees, cardinal direction, and keyboard increments |
| Watch-ring selector | assign the current watch or station | bounded ring sectors contract radially; labels remain horizontal and readable |
| Drift trim wheel | adjust a small course correction | decrement/increment spokes alter a precise signed value and show the accepted limit |
| Porthole confirmation shutter | confirm a verified heading or sealed compartment | the shutter closes once, reveals a stable brass boundary, and reports the result in text |

Avoid cyan sonar rings and pirate ornament. Rings must own heading, watch, or verification.

## Yan — records, annotations, and deliberate commitment

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Record slip rail | choose an office, stage, or document leaf | narrow paper slips move along an annotation margin and retain the active red record edge |
| Seal press | commit a reviewed record | a square/folded control settles downward once and prints a stable textual approval state |
| Folded petition selector | switch between request, review, response, and archive | stacked leaves expose one folded upper corner and preserve reading order |
| Annotation margin toggle | show or hide editorial notes | a narrow margin expands beside the document instead of floating over the reading surface |

Use seals sparingly. The strongest red mark belongs to commitment, not every click.

## Leithanien — cadence and cue ownership

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Cadence stepper | advance through a measured program sequence | elongated nodes close symmetrically around the active cue |
| Cue baton scrubber | move through rehearsal time or cue points | a narrow vertical thumb crosses named event marks and exposes current cue ownership |
| Rehearsal bracket | group related program segments | mirrored brackets expand/close while retaining exact start and end points |
| Correspondence closure | confirm that paired cue owners agree | two opposing controls resolve into one central committed state only when both are ready |

Avoid piano-key controls and floating music-note affordances.

## Penguin Logistics — fast handoffs

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Removable handoff stub | accept or transfer a parcel | a perforated stub snaps along the delivery lane and keeps courier, parcel, and destination attached |
| Courier relay rail | assign the next courier | dark navy tickets move horizontally; the selected ticket exposes a paper-white dispatch band |
| Parcel-condition tear tag | acknowledge cold, fragile, or time-critical handling | each removable tag owns one condition and a visible accepted state |
| Delivery-lane shuttle | switch between pickup, transit, and handoff | a three-stop lane preserves direction and ETA rather than behaving like neutral tabs |

Keep the palette dark navy and paper white. Avoid sticker noise, toy yellow, and generic graffiti.

## Blacksteel — protected equipment and contractual readiness

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Equipment bay shutters | arm or seal individual equipment bays | opposed industrial plates close inward; safety yellow marks readiness and quiet violet marks ownership |
| Readiness lock rail | show whether all prerequisites are satisfied | interlocked nodes expose exactly which prerequisite blocks deployment |
| Contract scope latch | include or exclude a task/equipment group | a hard two-position latch preserves the contractual consequence in its label |
| Prerequisite interlock | coordinate several dependent approvals | the commit control remains visibly locked until all named dependencies resolve |

Avoid weapon-shaped controls, generic military HUD chrome, and all-violet readiness states.

## Ursus Student Group — repaired shared records

| Control | Task role | Mechanic and feedback |
| --- | --- | --- |
| Repaired checklist strip | assign and verify shelter or transfer tasks | irregular paper strips settle modestly and gain one brick-red repair/check line |
| Shared-supply responsibility tabs | assign an owner to food, medicine, heat, or transport | patched tabs retain both resource and responsible person; unassigned states remain explicit |
| Alert-window tape | set or inspect the remaining safe movement window | a stepped paper/tape rail exposes exact minutes and a non-spectacular critical state |
| Transfer corridor latch | open a verified evacuation corridor | the latch stays visibly repaired and restrained; it names the unsafe gate when blocked |

Keep the wartime documentary context. Avoid pink softness, cute school controls, and spectacular alarm motion.

## Cross-faction collision test

Render the signature control without labels or color, then compare all twelve:

1. Rhine must read as measured/calibrated; Lungmen as routed/permitted; Kazimierz as opposing broadcast ownership.
2. Laterano must read as witnessed authority; Siracusa as layered evidence; Kjerag as stitched route thresholds.
3. Iberia must read as bearing/watchkeeping; Yan as paper record/commitment; Leithanien as cadence/correspondence.
4. Penguin Logistics must read as a removable handoff; Blacksteel as an interlocked equipment bay; Ursus Student Group as a repaired shared record.
5. If two controls still share the same silhouette, change mechanics or information arrangement before changing color.
