'use client'
import React, {Component, useState} from "react";
import NavBar from "../components/navbar";
import styles from "./beerlisting.module.css"

const navigation = {
    brand: { name: "Drafted", to: "/"},
    links: [
        { name: "Batch Control", to: "/batchcontrol", },
        { name: "Beer Listing", to: "/beerlisting", },
        { name: "News Posts", to: "/news", },
        { name: "Settings", to: "/settings", },
    ]
    
}

/*export default class BeerListing extends Component {
    render() {
        const { brand, links } = navigation;

        return (
            <main className={styles.main}>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                <NavBar brand={brand} links={links}/>

                <div className={styles.mainContent}>
                    <div className="form">
                        <h2 className={styles.heading1}>Add a New Beer Listing</h2>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Beer Name</label>
                            <input type="text" name="name"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Beer Style</label>
                            <input type="text" name="style"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>ABV</label>
                            <input type="text" name="abv"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>IBU</label>
                            <input type="text" name="ibu"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Color (SRM)</label>
                            <input type="text" name="color"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Beer Description</label>
                            <input type="text" name="description"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Batch Image</label>
                            <input type="file" name="image" accept="image/png, image/jpeg"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Serving Size</label>
                            <input type="text" name="servingsize"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Ingredients</label>
                            <input type="text" name="ingredients"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Start Date</label>
                            <input type="text" name="date"/>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.saveButton}>Save</button>
                            <button className={styles.clearButton}>Clear</button>
                        </div>
                    </div>
                    <div className={styles.dataTable}>
                        <h2 className={styles.heading2}>Beers</h2>
                    </div>
                </div>

                
            </main>
        );
    }
}*/

const BeerListing: React.FC = () => {
    const { brand, links } = navigation;

    const [beer, setBeer] = useState({
        name: "",
        style: "",
        abv: "",
        ibu: "",
        abw: "",
        color: "",
        desc: "",
        image: null,
        serving: "",
        ingredients: "",
        date: ""
    });

    const [beers, setBeers] = useState<any[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setBeer(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSave = () => {
        setBeers([...beers, beer]);
        setBeer({
            name: "",
            style: "",
            abv: "",
            ibu: "",
            abw: "",
            color: "",
            desc: "",
            image: null,
            serving: "",
            ingredients: "",
            date: ""
        });
    };

    const handleClear = () => {
        setBeer({
            name: "",
            style: "",
            abv: "",
            ibu: "",
            abw: "",
            color: "",
            desc: "",
            image: null,
            serving: "",
            ingredients: "",
            date: ""
        });
    };

    return (
        <main className={styles.main}>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            <NavBar brand={brand} links={links} />

            <div className={styles.mainContent}>
                <div className="form">
                    <h2 className={styles.heading1}>Add a Beer Listing</h2>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Beer Name</label>
                        <input type="text" name="name" value={beer.name} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Beer Style</label>
                        <input type="text" name="style" value={beer.style} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>ABV</label>
                        <input type="text" name="abv" value={beer.abv} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>IBU</label>
                        <input type="text" name="ibu" value={beer.ibu} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>ABW</label>
                        <input type="text" name="abw" value={beer.abw} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Color (SRM)</label>
                        <input type="text" name="color" value={beer.color} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Beer Description</label>
                        <input type="text" name="desc" value={beer.desc} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Batch Image</label>
                        <input type="file" name="image" accept="image/png, image/jpeg" onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Serving Size</label>
                        <input type="text" name="serving" value={beer.serving} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Ingredients</label>
                        <input type="text" name="ingredients" value={beer.ingredients} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Start Date</label>
                        <input type="text" name="date" value={beer.date} onChange={handleChange} />
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.saveButton} onClick={handleSave}>Save</button>
                        <button className={styles.clearButton} onClick={handleClear}>Clear</button>
                    </div>
                </div>
                <div className={styles.dataTable}>
                    <h2 className={styles.heading2}>Beer</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Style</th>
                                    <th>ABV</th>
                                    <th>IBU</th>
                                    <th>ABW</th>
                                    <th>Color (SRM)</th>
                                    <th>Description</th>
                                    <th>Batch Image</th>
                                    <th>Serving Size</th>
                                    <th>Ingredients</th>
                                    <th>Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {beers.map((beer, index) => (
                                    <tr key={index}>
                                        <td>{beer.name}</td>
                                        <td>{beer.style}</td>
                                        <td>{beer.abv}</td>
                                        <td>{beer.ibu}</td>
                                        <td>{beer.abw}</td>
                                        <td>{beer.color}</td>
                                        <td>{beer.desc}</td>
                                        <td>{beer.image ? beer.image.name : "No Image"}</td>
                                        <td>{beer.serving}</td>
                                        <td>{beer.ingredients}</td>
                                        <td>{beer.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BeerListing;