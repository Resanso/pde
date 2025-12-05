import { publicProcedure, router } from "@/lib/server/trpc";

export const appRouter = router({
  health: publicProcedure.query(() => "ok"),
});
// export type definition of API
export type AppRouter = typeof appRouter;
