import Head from "next/head"

export default function PrefilledHead() {
    return ( 
        <Head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="assets/favicon.jpg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>JonUX Creative</title>
            <link rel="stylesheet" href="modal.css" class="stylesheet" />
            <link rel="stylesheet" href="styles.css" class="styles" />
            <link rel="script" href="popup.js" />
            <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-24ZXD6E1EF%22%3E"
            ></script>
            <script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                dataLayer.push(arguments);
                }
                gtag("js", new Date());

                gtag("config", "G-24ZXD6E1EF");
            `}
            </script>
            <script type="application/ld+json">
            {`
                {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "name": "JonUX Creative",
                "image": "https://jonuxcreative.co.uk/assets/Logos/JonUX.svg",
                "email": "jon@jonuxcreative.co.uk",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Welsh Ice Britannia House, Caerphilly Business Park, Van Rd",
                    "postalCode": "Caerphilly CF83 3GG"
                }
                }
            `}
            </script>
        </Head>
    )
  }