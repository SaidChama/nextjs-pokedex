import Head from 'next/head'

export default function Layout({bg, title, children}) {
    return(
        <div className={bg}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pokedex.ico" />
            </Head>
            <main className="container mx-auto pt-8 min-h-screen max-w-screen-xl">
                {children}
            </main>
        </div>
    )
}