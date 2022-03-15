import * as React from 'react';
import styles from './TeamsCheck.module.scss';
import { ITeamsCheckProps } from './ITeamsCheckProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TeamsCheck extends React.Component<ITeamsCheckProps, {}> {
  public render(): React.ReactElement<ITeamsCheckProps> {
    const {

    } = this.props;

    return (
      // <section className={`${styles.teamsCheck} ${hasTeamsContext ? styles.teams : ''}`}>
      //   <div className={styles.welcome}>
      //     <div className="${ styles.myFirstTeamsTab }">
      //       <div className="${ styles.container }">
      //         <div className="${ styles.row }">
      //           <div className="${ styles.column }">
      //             <span className="${ styles.title }">{title}</span>
      //             <p className="${ styles.subTitle }">{subTitle}</p>
      //             <p className="${ styles.description }">{siteTabTitle}</p>
      //             <p className="${ styles.description }">Description property value - {escape(description)}</p>
      //             <a href="https://aka.ms/spfx" className="${ styles.button }">
      //               <span className="${ styles.label }">Learn more</span>
      //             </a>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
      <section></section>
    );
  }
}
