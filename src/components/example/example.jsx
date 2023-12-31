import React from "react";
import styles from "./example.module.css";


const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export const Example = () => {
    return (
        
      <div className={styles.container}>
        <div className={styles.magback}></div>
        
        <div className={styles.paka}>
          <div>
            <h2 className={styles.texth2}>Application and website design</h2>
            <p className={styles.textp}>
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  
            
          </div>
          <div className={styles.images}>
            <img
              src="https://res.cloudinary.com/dacosbo9t/image/upload/v1699125157/Test/seeh66italfkcj0kgyy7.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className={styles.rounde}
            />
            
            
           
          </div>
        </div>
        <div className={styles.paka}>
          <div>
            <h2 className={styles.texth2}>Technical Specifications</h2>
            <p className={styles.textp}>
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  
            
          </div>
          <div className={styles.images}>
            <img
              src="https://res.cloudinary.com/dacosbo9t/image/upload/v1699124773/samples/woman-on-a-football-field.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className={styles.rounde}
            />
            
            
           
          </div>
        </div>
      </div>
    )
  }
  