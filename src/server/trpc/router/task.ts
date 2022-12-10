import { z } from "zod";
import { protectedProcedure, router } from "../trpc";

export const taskRouter = router({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string({
          required_error: "Title is required",
        }),
        description: z.string({
          required_error: "Description is required",
        }),
        status: z.string().optional(),
      })
    )
    .mutation(({ ctx, input }) => {
      const { prisma, session } = ctx;
      // const userId = session.user.id;

      return prisma.task.create({
        data: {
          title: input.title,
          description: input.description,
          status: input?.status,
          // user: {
          //   connect: {
          //     id: userId,
          //   },
          // },
        },
      });
    }),
});
