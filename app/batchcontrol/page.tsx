'use client'
import React, {Component, useState} from "react";
import NavBar from "../components/navbar";
import styles from "./batchcontrol.module.css";

const navigation = {
    brand: { name: "Drafted", to: "/"},
    links: [
        { name: "Batch Control", to: "/batchcontrol", },
        { name: "Beer Listing", to: "/beerlisting", },
        { name: "News Posts", to: "/news", },
        { name: "Settings", to: "/settings", },
    ]
    
}

/*export default class BatchControl extends Component {
    render() {
        const { brand, links } = navigation;

        return (
            <main className={styles.main}>
                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                <NavBar brand={brand} links={links}/>

                <div className={styles.mainContent}>
                    <div className="form">
                        <h2 className={styles.heading1}>Create a New Batch</h2>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Batch Name</label>
                            <input type="text" name="name"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Creation Date</label>
                            <input type="text" name="date"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Batch Description</label>
                            <input type="text" name="desc"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Ingredients</label>
                            <input type="text" name="ingredients"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>ABV</label>
                            <input type="text" name="abv"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>IBU (International Bitterness Index)</label>
                            <input type="text" name="ibu"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Quantity Produced (In Gallons)</label>
                            <input type="text" name="quantity"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Type of Packaging</label>
                            <input type="text" name="type"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Batch Image</label>
                            <input type="file" name="image" accept="image/png, image/jpeg"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Linked Beer</label>
                            <input type="text" name="linked"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Status</label>
                            <input type="text" name="status"/>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.saveButton}>Save</button>
                            <button className={styles.clearButton}>Clear</button>
                        </div>
                    </div>
                    <div className={styles.dataTable}>
                        <h2 className={styles.heading2}>Batches</h2>
                    </div>
                </div>

                
            </main>
        );
    }
}*/

const BatchControl: React.FC = () => {
    const { brand, links } = navigation;

    const [batch, setBatch] = useState({
        name: "",
        date: "",
        desc: "",
        ingredients: "",
        abv: "",
        ibu: "",
        quantity: "",
        type: "",
        image: null,
        linked: "",
        status: ""
    });

    const [batches, setBatches] = useState<any[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setBatch(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSave = () => {
        setBatches([...batches, batch]);
        setBatch({
            name: "",
            date: "",
            desc: "",
            ingredients: "",
            abv: "",
            ibu: "",
            quantity: "",
            type: "",
            image: null,
            linked: "",
            status: ""
        });
    };

    const handleClear = () => {
        setBatch({
            name: "",
            date: "",
            desc: "",
            ingredients: "",
            abv: "",
            ibu: "",
            quantity: "",
            type: "",
            image: null,
            linked: "",
            status: ""
        });
    };

    return (
        <main className={styles.main}>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            <NavBar brand={brand} links={links} />

            <div className={styles.mainContent}>
                <div className="form">
                    <h2 className={styles.heading1}>Create a New Batch</h2>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Batch Name</label>
                        <input type="text" name="name" value={batch.name} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Creation Date</label>
                        <input type="text" name="date" value={batch.date} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Batch Description</label>
                        <input type="text" name="desc" value={batch.desc} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Ingredients</label>
                        <input type="text" name="ingredients" value={batch.ingredients} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>ABV</label>
                        <input type="text" name="abv" value={batch.abv} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>IBU (International Bitterness Index)</label>
                        <input type="text" name="ibu" value={batch.ibu} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Quantity Produced (In Gallons)</label>
                        <input type="text" name="quantity" value={batch.quantity} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Type of Packaging</label>
                        <input type="text" name="type" value={batch.type} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Batch Image</label>
                        <input type="file" name="image" accept="image/png, image/jpeg" onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Linked Beer</label>
                        <input type="text" name="linked" value={batch.linked} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Status</label>
                        <input type="text" name="status" value={batch.status} onChange={handleChange} />
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.saveButton} onClick={handleSave}>Save</button>
                        <button className={styles.clearButton} onClick={handleClear}>Clear</button>
                    </div>
                </div>
                <div className={styles.dataTable}>
                    <h2 className={styles.heading2}>Batches</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Creation Date</th>
                                    <th>Description</th>
                                    <th>Ingredients</th>
                                    <th>ABV</th>
                                    <th>IBU</th>
                                    <th>Quantity</th>
                                    <th>Packaging Type</th>
                                    <th>Image</th>
                                    <th>Linked Beer</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {batches.map((batch, index) => (
                                    <tr key={index}>
                                        <td>{batch.name}</td>
                                        <td>{batch.date}</td>
                                        <td>{batch.desc}</td>
                                        <td>{batch.ingredients}</td>
                                        <td>{batch.abv}</td>
                                        <td>{batch.ibu}</td>
                                        <td>{batch.quantity}</td>
                                        <td>{batch.type}</td>
                                        <td>{batch.image ? batch.image.name : "No Image"}</td>
                                        <td>{batch.linked}</td>
                                        <td>{batch.status}</td>
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

export default BatchControl;