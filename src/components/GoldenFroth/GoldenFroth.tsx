"use client";
import styles from "./GoldenFroth.module.css";
import { motion } from "framer-motion";

export default function GoldenFroth() {
    return (
        <section className={styles.container}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={styles.textBox}
            >
                <h2 className={styles.title}>The Golden Froth</h2>
                <p className={styles.description}>
                    A proprietary brewing technique that maximizes micro-bubbles for a texture as smooth as silk and as sharp as ice.
                    The golden hue comes from our roasted barley, sun-dried in the midnight sun.
                </p>
            </motion.div>
        </section>
    );
}
