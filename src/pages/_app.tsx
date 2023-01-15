import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import MainLayout from "../layout/main-layout";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <MainLayout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MainLayout>
  );
};

export default trpc.withTRPC(MyApp);
