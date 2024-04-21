import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <section className="w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="w-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center m-8 justify-center p-8">
        <Link
          href="/add-person"
          className="flex items-center text-center justify-center text-lg font-bold m-6 p-6 border-2 rounded-lg lg:whitespace-nowrap"
        >
          Add Person
        </Link>
        <Link
          href="/remove-person"
          className="flex items-center text-center justify-center text-lg font-bold m-6 p-6 border-2 rounded-lg lg:whitespace-nowrap"
        >
          Remove Person
        </Link>
        <Link
          href="/all-tenants"
          className="flex items-center text-center justify-center text-lg font-bold m-6 p-6 border-2 rounded-lg lg:whitespace-nowrap"
        >
          All Tenants
        </Link>
        <Link
          href="/rent-status"
          className="flex items-center text-center justify-center text-lg font-bold m-6 p-6 border-2 rounded-lg lg:whitespace-nowrap"
        >
          Rent Status
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
