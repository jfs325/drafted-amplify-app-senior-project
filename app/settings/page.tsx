'use client'
import React, {Component} from "react";
import NavBar from "../components/navbar";
import styles from "./settings.module.css"
import Image from 'next/image'
import logo from "../images/Victory_Brewing_Company_logo.png"

const navigation = {
    brand: { name: "Drafted", to: "/"},
    links: [
        { name: "Batch Control", to: "/batchcontrol", },
        { name: "Beer Listing", to: "/beerlisting", },
        { name: "News Posts", to: "/news", },
        { name: "Settings", to: "/settings", },
    ]
    
}

/*export default class News extends Component {
    render() {
        const { brand, links } = navigation;

        return (
            <main className={styles.main}>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                <NavBar brand={brand} links={links}/>

                <div className={styles.mainContent}>
                    <div className="form">
                        <h2 className={styles.heading1}>Settings</h2>
                    </div>
                </div>

                
            </main>
        );
    }
}*/

const Settings: React.FC = () => {
    const brewery = {
        name: "Victory Brewing Company",
        email: "brewery@example.com",
        phoneNumber: "+123-456-7890",
        address: "123 Brewery St, Philadelphia, PA",
        url: "https://yourbrewery.com",
        socialMedia: {
            facebook: "https://facebook.com/victorybeer",
            twitter: "https://twitter.com/victorybeer",
            instagram: "https://instagram.com/victorybeer"
        },
        logo: logo
    };

    const { brand, links } = navigation;

    return (
        <main className={styles.main}>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            <NavBar brand={brand} links={links} />

            <div className={styles.mainContent}>
                <div className={styles.profile}>
                    <div className={styles.info}>
                        <h2 className={styles.heading1}>{brewery.name}</h2>
                        <div className={styles.contactInfo}>
                            <p><strong>Email:</strong> {brewery.email}</p>
                            <p><strong>Phone Number:</strong> {brewery.phoneNumber}</p>
                            <p><strong>Address:</strong> {brewery.address}</p>
                            <p><strong>Website:</strong> <a href={brewery.url}>{brewery.url}</a></p>
                            <p><strong>Social Media:</strong></p>
                            <ul className={styles.socialMedia}>
                                <li><a href={brewery.socialMedia.facebook}>Facebook</a></li>
                                <li><a href={brewery.socialMedia.twitter}>Twitter</a></li>
                                <li><a href={brewery.socialMedia.instagram}>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <Image src={brewery.logo} alt="Brewery Logo" height={300} width={650} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Settings;
