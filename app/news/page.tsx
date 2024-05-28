'use client'
import React, {Component, useState} from "react";
import NavBar from "../components/navbar";
import styles from "./news.module.css"

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
                        <h2 className={styles.heading1}>Add a News Listing</h2>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Title</label>
                            <input type="text" name="title"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Type</label>
                            <input type="text" name="type"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Start Date</label>
                            <input type="text" name="start"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>End Date</label>
                            <input type="text" name="date"/>
                        </div>
                        <div className={styles.formItem}>
                            <label className={styles.labelClass}>Content</label>
                            <input type="file" name="content" accept="image/png, image/jpeg"/>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={styles.saveButton}>Save</button>
                            <button className={styles.clearButton}>Clear</button>
                        </div>
                    </div>
                    <div className={styles.dataTable}>
                        <h2 className={styles.heading2}>News</h2>
                    </div>
                </div>

                
            </main>
        );
    }
}*/

const News: React.FC = () => {
    const { brand, links } = navigation;

    const [news, setNews] = useState({
        title: "",
        type: "",
        start: "",
        date: "",
        content: null
    });

    const [newsList, setNewsList] = useState<any[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setNews(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSave = () => {
        setNewsList([...newsList, news]);
        setNews({
            title: "",
            type: "",
            start: "",
            date: "",
            content: null
        });
    };

    const handleClear = () => {
        setNews({
            title: "",
            type: "",
            start: "",
            date: "",
            content: null
        });
    };

    return (
        <main className={styles.main}>
            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
            <NavBar brand={brand} links={links} />

            <div className={styles.mainContent}>
                <div className="form">
                    <h2 className={styles.heading1}>Add a News Listing</h2>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Title</label>
                        <input type="text" name="title" value={news.title} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Type</label>
                        <input type="text" name="type" value={news.type} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Start Date</label>
                        <input type="text" name="start" value={news.start} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>End Date</label>
                        <input type="text" name="date" value={news.date} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label className={styles.labelClass}>Content</label>
                        <input type="file" name="content" accept="image/png, image/jpeg" onChange={handleChange} />
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.saveButton} onClick={handleSave}>Save</button>
                        <button className={styles.clearButton} onClick={handleClear}>Clear</button>
                    </div>
                </div>
                <div className={styles.dataTable}>
                    <h2 className={styles.heading2}>News</h2>
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newsList.map((news, index) => (
                                    <tr key={index}>
                                        <td>{news.title}</td>
                                        <td>{news.type}</td>
                                        <td>{news.start}</td>
                                        <td>{news.end}</td>
                                        <td>{news.image ? news.image.name : "No Image"}</td>
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

export default News;