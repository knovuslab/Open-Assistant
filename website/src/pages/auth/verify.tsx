import { useColorMode } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { getCsrfToken, getProviders } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Verify() {
  const { colorMode } = useColorMode();
  const bgColorClass = colorMode === "light" ? "bg-gray-50" : "bg-chakra-gray-900";

  return (
    <>
      <Head>
        <title>Sign Up - ራስ | rasGPT</title>
        <meta name="Sign Up" content="Sign up to access ራስ | rasGPT" />
      </Head>
      <div className={`flex h-full justify-center items-center ${bgColorClass}`}>
        <div className={bgColorClass}>
          <h1 className="text-lg">A sign-in link has been sent to your email address (likely going to spam).</h1>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale = "en" }) => {
  const csrfToken = await getCsrfToken();
  const providers = await getProviders();
  return {
    props: {
      csrfToken,
      providers,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
