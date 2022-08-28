import React from "react";
import { ImageProject } from './components/ImageProject';
import * as data from "../data/project.json"
export function ProjectContainer(text,ImgSrc){
    return (<>
        <div className={styles.projectFrame}>
        <ImageProject  src='/hhdlogo.jpg' height={300} width={400}></ImageProject>
        <div className={styles.textContainer}>
            <p>Aliquip voluptate cillum mollit nostrud consequat esse. Non ad excepteur ad cupidatat. Non ex ipsum veniam consequat enim mollit nostrud velit deserunt cupidatat. Excepteur do cupidatat velit do in commodo in esse adipisicing adipisicing incididunt incididunt reprehenderit irure. Cillum deserunt officia eiusmod sunt dolor veniam occaecat adipisicing ad. Duis ad ea quis ex enim exercitation aute et labore. Id ut elit aliqua sunt qui elit ex sunt voluptate veniam commodo irure velit.</p>
        </div>
    </div>
    </>)
}