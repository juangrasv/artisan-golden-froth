"use client";
import styles from "./ProductReveal.module.css";
import { motion } from "framer-motion";

export default function ProductReveal() {
    return (
        <section className={styles.container}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.center}
            >
                <h2 className={styles.heading}>Taste the Freeze</h2>
                <button className={styles.cta}>
                    Order Now
                </button>
            </motion.div>
        </section>
    );
}
