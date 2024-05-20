import { FunctionComponent } from "react";
import styles from './HomepageSection.module.css'
export type HomepageSectionComponentType = {
    sectionNo: number;
    sectionTitle: string;
}
const HomepageSectionComponent: FunctionComponent<HomepageSectionComponentType> = ({
    sectionNo,
    sectionTitle,
}) => {
    return (
        <section className={styles.sectionContent}>
            <div className={styles.sectionInfo}>
                <div className={styles.sectionNo}>{sectionNo}</div>
            </div>
            <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
        </section>
    );
}

export default HomepageSectionComponent;
