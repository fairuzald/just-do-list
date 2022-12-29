import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Login from "./login";
import Layout from "../components/layout";
import NavbarMenu from "../components/navbar-menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Just Do List!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-app.png" />
      </Head>
      <div className="flex flex-auto h-screen max-h-full">
        <div className="m-auto">
          <Login />
        </div>
      </div>
    </>
  );
}
