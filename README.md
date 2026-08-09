# falina-shared

Falina shared contracts: types, models, constants, validation.

Consumed by `falina-web` and `falina-api` via the TypeScript path alias
`@falina/shared` → `libs/falina-shared/src/index.ts` (see each app's
`tsconfig.json`). Plain TypeScript only — no framework dependencies.

## Layout

- `src/types/` — cross-cutting unions/enums (reading states, intentions, tarot, astro, entitlements)
- `src/models/` — domain interfaces (User, Reading, TarotCard, CoffeeReading, AstrologyChart, Oracle…)
- `src/constants/` — canonical data (intentions, spreads, 78 tarot cards, 28 coffee symbols, entitlements, error codes)
- `src/validation/` — dependency-free validation helpers (uuid, timezone, ISO date/time, image MIME)

## Checks

```bash
cd libs/falina-shared && npx tsc --noEmit   # or: npx nx typecheck falina-shared
```
