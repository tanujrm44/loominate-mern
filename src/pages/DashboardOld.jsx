import React from 'react'
import styles from "./Dashboard.module.css"
import Header from '../components/Header.jsx'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    if (!userInfo) {
        window.location.href = "/login"
    }
    return (
        <>
            <Header />
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.col_1}>
                        <div className={`${styles.tabs} ${styles.box}`}>
                            <div className={`${styles.tab} ${styles.active}`}>
                                <i className="fa-regular fa-comment"></i>
                                <p className={styles.tab_name}>My Feed</p>
                            </div>
                            <div className={styles.tab}>
                                <i className="fa-solid fa-chart-simple"></i>
                                <p className={styles.tab_name}>Leaderboard</p>
                            </div>
                            <div className={styles.tab}>
                                <i className="fa-solid fa-user"></i>
                                <p className={styles.tab_name}>My Profile</p>
                            </div>
                        </div>
                        <div className={`${styles.categories} ${styles.box}`}>
                            <h1 className={styles.box_name}>CATEGORIES</h1>
                            <div className={`${styles.category}`}>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                                <p>lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_2}>
                        <form>
                            <input type="text" placeholder="Post Something..." />
                        </form>
                        <div className={styles.post_tabs}>
                            <span className={`${styles.post_tab} ${styles.box}`}>All</span>
                            <span className={`${styles.post_tab} ${styles.box}`}>Polls</span>
                            <span className={`${styles.post_tab} ${styles.box}`}>Initaitives</span>
                        </div>
                        <div className={styles.post}>
                            <div className={styles.flex_bwn}>
                                <div className={styles.post_category}>category</div>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                            <div className={styles.flex}>
                                <i className="fa-solid fa-user-tie"></i>
                                <p>Username</p>
                                <p className={styles.post_category}>You</p>
                            </div>
                            <h3>First Post</h3>
                            <p>Just Exploring</p>
                            <p style={{ color: "#ff2692", marginTop: "10px" }}>#tag</p>
                            <div className={styles.flex}>
                                <i className="fa-solid fa-user-tie"></i>
                                <form>
                                    <input
                                        className={styles.comment}
                                        type="text"
                                        placeholder="Comment as username"
                                    />
                                </form>
                            </div>
                        </div>
                    </div >
                    <div className={styles.col_3}>
                        <div className={styles.box}>
                            <div className={styles.box_name}>MY PROFILE</div>
                            <div className={styles.flex}>
                                <i className="fa-solid fa-user-tie"></i>
                                <div>
                                    <h3>Username</h3>
                                    <p>Joined May 2023</p>
                                </div>
                            </div>
                            <p className={styles.profile_desc}>description</p>
                            <div className={styles.box}>
                                <div className={styles.flex_bwn}>
                                    <div className={styles.profile_stats}>
                                        <strong>1</strong>
                                        <p>posts</p>
                                    </div>
                                    <div className={styles.profile_stats}>
                                        <strong>0</strong>
                                        <p>polls</p>
                                    </div>
                                    <div className={styles.profile_stats}>
                                        <strong>0</strong>
                                        <p>initiatives</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Dashboard
