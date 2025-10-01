import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Home
 * This component renders the portfolio landing page converted from assets/index.html.
 * Images are referenced from the public /assets path after being copied by the build tooling.
 * Styles are applied globally via assets/styles.css imported in index.js.
 */
function Home() {
  return (
    <main id="screen-desktop-14440" className="screen" role="main" aria-label="Desktop 14440">
      {/* Top Navbar */}
      <header className="node node-3-15 frame navbar" style={{ left: 148, top: 1750, width: 1440, height: 80, position: 'absolute' }}>
        <div className="node node-2-6 text logo" style={{ left: 278, top: 1763, width: 84, height: 54, position: 'absolute' }}>ZOKA</div>
        <div className="node node-3-3 rect rect-pill" style={{ left: 1311, top: 1761, width: 145, height: 57, position: 'absolute' }}></div>
        <div className="node node-3-6 text link link-accent" style={{ left: 1345, top: 1776, width: 78, height: 27, position: 'absolute' }}>Youtube</div>
        <nav className="node node-3-10 frame nav-links" style={{ left: 622, top: 1775, width: 491, height: 30, position: 'absolute' }}>
          <span className="node node-3-7 text nav-item active" style={{ left: 622, top: 1775, width: 61, height: 30, position: 'absolute' }}>Home</span>
          <span className="node node-3-8 text nav-item" style={{ left: 723, top: 1775, width: 63, height: 30, position: 'absolute' }}>Pages</span>
          <span className="node node-3-13 text nav-item" style={{ left: 826, top: 1775, width: 120, height: 30, position: 'absolute' }}>Photograpy</span>
          <span className="node node-3-14 text nav-item" style={{ left: 986, top: 1775, width: 127, height: 30, position: 'absolute' }}>Photoshoots</span>
        </nav>
      </header>

      {/* Hero/Intro Section Frame 3 */}
      <section className="node node-3-33 frame" aria-label="Hero section" style={{ left: 148, top: 1790, width: 1440, height: 814, position: 'absolute' }}>
        {/* Right image group */}
        <div className="node node-3-19 group rounded-20" style={{ left: 778, top: 1870, width: 680, height: 670, position: 'absolute' }}>
          <img className="node node-3-16 image rounded-20" alt="" src="/assets/figmaimages/figma_image_3_16.png" style={{ left: 778, top: 1870, width: 680, height: 400 }} />
          <img className="node node-3-17 image rounded-20" alt="" src="/assets/figmaimages/figma_image_3_17.png" style={{ left: 778, top: 2290, width: 279, height: 250 }} />
          <img className="node node-3-18 image rounded-20" alt="" src="/assets/figmaimages/figma_image_3_18.png" style={{ left: 1078, top: 2290, width: 380, height: 250 }} />
        </div>
        {/* Left text stack */}
        <div className="node node-3-30 frame" style={{ left: 278, top: 1850, width: 438, height: 694, position: 'absolute' }}>
          <h1 className="node node-3-2 text display-xxl" style={{ left: 278, top: 1850, width: 438, height: 480, position: 'absolute' }}>
            Where<br />creative<br />process<br />happens
          </h1>
          <p className="node node-3-20 text body" style={{ left: 278, top: 2370, width: 275, height: 54, position: 'absolute' }}>
            Your creativity, our inspiration<br />Whatever your story, set if free.
          </p>
          <div className="node node-3-36 group cta-elevated" style={{ left: 278, top: 2464, width: 266, height: 80, position: 'absolute' }}>
            <div className="node node-3-22 rect cta-surface" style={{ left: 278, top: 2464, width: 266, height: 80, position: 'absolute' }}></div>
            <div className="node node-3-28 group" style={{ left: 348, top: 2489, width: 126, height: 30, position: 'absolute' }}>
              <button className="node node-3-21 btn btn-primary" style={{ left: 348, top: 2489, width: 126, height: 30, position: 'absolute' }}>Get in Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* About/Why section Frame 5 */}
      <section className="node node-7-7 frame" aria-label="About why" style={{ left: 148, top: 2844, width: 1440, height: 599, position: 'absolute' }}>
        {/* Left collage */}
        <div className="node node-7-6 group" style={{ left: 275, top: 2914, width: 483, height: 459, position: 'absolute' }}>
          <img className="node node-3-45 image rounded-20" alt="" src="/assets/figmaimages/figma_image_3_45.png" style={{ left: 522, top: 2914, width: 236, height: 459 }} />
          <div className="node node-7-5 boolean" style={{ left: 275, top: 2914, width: 188, height: 459, position: 'absolute' }}>
            <img className="node node-3-50 image rounded-20" alt="" src="/assets/figmaimages/figma_image_3_50.png" style={{ left: 278, top: 2914, width: 80, height: 77 }} />
            <img className="node node-3-52 image rounded-20" alt="" src="/assets/figmaimages/figma_image_3_52.png" style={{ left: 278, top: 3179, width: 180, height: 87 }} />
            <img className="node node-3-54 image rounded-20" alt="" src="/assets/figmaimages/figma_image_3_54.png" style={{ left: 275, top: 3017, width: 180, height: 138 }} />
          </div>
        </div>
        {/* Right copy and CTA */}
        <div className="node node-3-44 frame" style={{ left: 868, top: 2949, width: 435, height: 376, position: 'absolute' }}>
          <div className="node node-3-37 group cta-elevated" style={{ left: 868, top: 3245, width: 266, height: 80, position: 'absolute' }}>
            <div className="node node-3-38 rect cta-surface" style={{ left: 868, top: 3245, width: 266, height: 80, position: 'absolute' }}></div>
            <div className="node node-3-39 group" style={{ left: 938, top: 3270, width: 126, height: 30, position: 'absolute' }}>
              <button className="node node-3-40 btn btn-primary" style={{ left: 938, top: 3270, width: 126, height: 30, position: 'absolute' }}>Get in Touch</button>
            </div>
          </div>
          <p className="node node-3-35 text body" style={{ left: 878, top: 3124, width: 398, height: 81, position: 'absolute' }}>
            Your ceremony & reception venues, your<br />vision, your dress, your colours and anything<br />else you would like.
          </p>
          <div className="node node-3-34 text eyebrow" style={{ left: 878, top: 2949, width: 170, height: 30, position: 'absolute' }}>GET TO KNOW US</div>
          <h2 className="node node-3-31 text display-xl" style={{ left: 878, top: 2984, width: 392, height: 120, position: 'absolute' }}>
            Why we make it<br />happens
          </h2>
        </div>
      </section>

      {/* Stats & carousel-like strip Frame 7 */}
      <section className="node node-7-102 frame" aria-label="Stats & strip" style={{ left: -44, top: 3443, width: 1634, height: 861, position: 'absolute' }}>
        <div className="node node-7-79 group" style={{ left: 880, top: 3563, width: 446, height: 248, position: 'absolute' }}>
          <h2 className="node node-7-78 text display-xl" style={{ left: 880, top: 3563, width: 446, height: 120, position: 'absolute' }}>
            Experiments and<br />personal projects.
          </h2>
          <p className="node node-7-77 text body" style={{ left: 880, top: 3703, width: 398, height: 108, position: 'absolute' }}>
            Your ceremony & reception venues, your<br />vision, your dress, your colours and anything<br />else you would like to share with us. I am a<br />Gold Coast and Brisbane.
          </p>
        </div>

        <div className="node node-7-80 rect strip-bg" style={{ left: 149, top: 3931, width: 1440, height: 253, position: 'absolute' }}></div>

        <div className="node node-7-105 group stat" style={{ left: 858, top: 3991, width: 138, height: 87, position: 'absolute' }}>
          <div className="node node-7-103 text stat-number" style={{ left: 880, top: 3991, width: 93, height: 60, position: 'absolute' }}>58+</div>
          <div className="node node-7-104 text stat-label" style={{ left: 858, top: 4051, width: 138, height: 27, position: 'absolute' }}>Cute Customer</div>
        </div>
        <div className="node node-7-106 group stat" style={{ left: 1046, top: 3991, width: 91, height: 87, position: 'absolute' }}>
          <div className="node node-7-108 text stat-number" style={{ left: 1046, top: 3991, width: 91, height: 60, position: 'absolute' }}>38+</div>
          <div className="node node-7-107 text stat-label" style={{ left: 1053, top: 4051, width: 78, height: 27, position: 'absolute' }}>Rewards</div>
        </div>
        <div className="node node-7-109 group stat" style={{ left: 1187, top: 3991, width: 169, height: 87, position: 'absolute' }}>
          <div className="node node-7-111 text stat-number" style={{ left: 1226, top: 3991, width: 91, height: 60, position: 'absolute' }}>98+</div>
          <div className="node node-7-110 text stat-label" style={{ left: 1187, top: 4051, width: 169, height: 27, position: 'absolute' }}>Project Completed</div>
        </div>

        {/* Left mock browser strip */}
        <div className="node node-7-101 group" style={{ left: -44, top: 3563, width: 804, height: 550, position: 'absolute' }}>
          <div className="node node-7-87 group" style={{ left: 35, top: 3563, width: 725, height: 550, position: 'absolute' }}>
            <div className="node node-7-82 rect card-glassy" style={{ left: 37, top: 3563, width: 723, height: 550, position: 'absolute' }}></div>
            <div className="node node-7-83 rect card-bar" style={{ left: 35, top: 3563, width: 725, height: 49.7115402222, position: 'absolute' }}></div>
            <div className="node node-7-84 dot green" style={{ left: 702, top: 3583.096191, width: 10, height: 10.576922, position: 'absolute' }}></div>
            <div className="node node-7-85 dot amber" style={{ left: 682, top: 3583.096191, width: 10, height: 10.576922, position: 'absolute' }}></div>
            <div className="node node-7-86 dot red" style={{ left: 662, top: 3583.096191, width: 10, height: 10.576922, position: 'absolute' }}></div>
          </div>
          <img className="node node-7-90 image rounded-10" alt="" src="/assets/figmaimages/figma_image_7_90.png" style={{ left: 388, top: 3869, width: 324, height: 200 }} />
          <img className="node node-7-92 image rounded-10" alt="" src="/assets/figmaimages/figma_image_7_92.png" style={{ left: -44, top: 3649, width: 412, height: 200 }} />
          <img className="node node-7-91 image rounded-10" alt="" src="/assets/figmaimages/figma_image_7_91.png" style={{ left: 215, top: 3869, width: 152, height: 200 }} />
          <div className="node node-7-97 group mask" style={{ left: 388, top: 3649, width: 152, height: 200, position: 'absolute' }}>
            <div className="node node-7-89 rect rounded-10" style={{ left: 388, top: 3649, width: 152, height: 200, position: 'absolute' }}></div>
            <img className="node node-7-96 image" alt="" src="/assets/figmaimages/figma_image_7_96.png" style={{ left: 292, top: 3524, width: 344, height: 397 }} />
          </div>
          <div className="node node-7-100 group mask" style={{ left: 560, top: 3649, width: 152, height: 200, position: 'absolute' }}>
            <div className="node node-7-98 rect rounded-10" style={{ left: 560, top: 3649, width: 152, height: 200, position: 'absolute' }}></div>
            <img className="node node-7-99 image" alt="" src="/assets/figmaimages/figma_image_7_99.png" style={{ left: 546, top: 3649, width: 178, height: 208 }} />
          </div>
        </div>
      </section>

      {/* Floral design gallery Frame 8 */}
      <section className="node node-7-146 frame" aria-label="Floral design" style={{ left: 150, top: 4404, width: 1440, height: 1208, position: 'absolute' }}>
        <div className="node node-7-122 group rounded-50" style={{ left: 280, top: 4524, width: 570, height: 368, position: 'absolute' }}>
          <h2 className="node node-7-114 text display-xl" style={{ left: 280, top: 4524, width: 570, height: 120, position: 'absolute' }}>
            Floral Design in a event<br />planning company
          </h2>
          <p className="node node-7-113 text body" style={{ left: 280, top: 4664, width: 398, height: 108, position: 'absolute' }}>
            Your ceremony & reception venues, your<br />vision, your dress, your colours and anything<br />else you would like to share with us. I am a<br />Gold Coast and Brisbane.
          </p>
          <div className="node node-7-115 group cta-elevated" style={{ left: 280, top: 4812, width: 266, height: 80, position: 'absolute' }}>
            <div className="node node-7-116 rect cta-surface" style={{ left: 280, top: 4812, width: 266, height: 80, position: 'absolute' }}></div>
            <div className="node node-7-117 group" style={{ left: 350, top: 4837, width: 126, height: 30, position: 'absolute' }}>
              <button className="node node-7-118 btn btn-primary" style={{ left: 350, top: 4837, width: 126, height: 30, position: 'absolute' }}>Get in Touch</button>
            </div>
          </div>
        </div>

        <div className="node node-7-128 group mask rounded-20" style={{ left: 280, top: 4972, width: 300, height: 400, position: 'absolute' }}>
          <div className="node node-7-123 rect rounded-20" style={{ left: 280, top: 4972, width: 300, height: 400, position: 'absolute' }}></div>
          <img className="node node-7-126 image" alt="" src="/assets/figmaimages/figma_image_7_126.png" style={{ left: 280, top: 4867, width: 331, height: 505 }} />
        </div>
        <div className="node node-7-130 group mask rounded-20" style={{ left: 720, top: 4812, width: 300, height: 400, position: 'absolute' }}>
          <div className="node node-7-124 rect rounded-20" style={{ left: 720, top: 4812, width: 300, height: 400, position: 'absolute' }}></div>
          <img className="node node-7-129 image" alt="" src="/assets/figmaimages/figma_image_7_129.png" style={{ left: 680, top: 4772, width: 380, height: 511 }} />
        </div>
        <div className="node node-7-132 group mask rounded-20" style={{ left: 1160, top: 4644, width: 300, height: 400, position: 'absolute' }}>
          <div className="node node-7-125 rect rounded-20" style={{ left: 1160, top: 4644, width: 300, height: 400, position: 'absolute' }}></div>
          <img className="node node-7-131 image" alt="" src="/assets/figmaimages/figma_image_7_131.png" style={{ left: 1160, top: 4569, width: 329, height: 487 }} />
        </div>

        <div className="node node-7-141 group pagination" style={{ left: 980, top: 5412, width: 480, height: 80, position: 'absolute' }}>
          <div className="node node-7-133 rect pagination-bg" style={{ left: 980, top: 5412, width: 480, height: 80, position: 'absolute' }}></div>
          <div className="node node-7-137 component lines" style={{ left: 1020, top: 5454, width: 262, height: 0, position: 'absolute' }}>
            <div className="node node-7-134 line" style={{ left: 1020, top: 5454, width: 131, height: 0, position: 'absolute' }}></div>
            <div className="node node-7-135 line" style={{ left: 1151, top: 5454, width: 131, height: 0, position: 'absolute' }}></div>
          </div>
          <div className="node node-7-140 group next" style={{ left: 1341, top: 5439, width: 48, height: 27, position: 'absolute' }}>
            <span className="node node-7-138 text next-label" style={{ left: 1341, top: 5439, width: 39, height: 27, position: 'absolute' }}>Next</span>
            <span className="node node-7-139 icon caret" style={{ left: 1385, top: 5450, width: 4, height: 7, position: 'absolute' }}></span>
          </div>
        </div>

        <div className="node node-7-142 text counter" style={{ left: 280, top: 5392, width: 73, height: 60, position: 'absolute' }}>01/18</div>
        <div className="node node-7-143 text counter" style={{ left: 720, top: 5232, width: 82, height: 60, position: 'absolute' }}>02/18</div>
        <div className="node node-7-144 text counter" style={{ left: 1160, top: 5064, width: 84, height: 60, position: 'absolute' }}>03/18</div>
      </section>

      {/* Our Awesome Works Frame 9 */}
      <section className="node node-108-32 frame" aria-label="Our Awesome Works" style={{ left: 160, top: 5712, width: 1440, height: 1435, position: 'absolute' }}>
        <div className="node node-108-31 group rounded-50" style={{ left: 290, top: 5712, width: 1180, height: 1437, position: 'absolute' }}>
          <h2 className="node node-108-6 text display-xxl-2" style={{ left: 290, top: 5712, width: 633, height: 90, position: 'absolute' }}>Our Awesome Works</h2>
          <p className="node node-108-7 text subhead" style={{ left: 290, top: 5822, width: 267, height: 38, position: 'absolute' }}>See what we shooted</p>

          <img className="node node-108-12 image card rounded-50 shadow-s" alt="" src="/assets/figmaimages/figma_image_108_12.png" style={{ left: 290, top: 5903, width: 380, height: 402 }} />
          <div className="node node-108-14 rect card rounded-50 shadow-s" style={{ left: 690, top: 5903, width: 380, height: 402, position: 'absolute' }}></div>
          <div className="node node-108-15 rect card rounded-50 shadow-s" style={{ left: 1090, top: 5903, width: 380, height: 402, position: 'absolute' }}></div>

          <div className="node node-108-16 rect card rounded-50 shadow-s" style={{ left: 290, top: 6325, width: 380, height: 402, position: 'absolute' }}></div>
          <div className="node node-108-17 rect card rounded-50 shadow-s" style={{ left: 690, top: 6325, width: 380, height: 402, position: 'absolute' }}></div>
          <div className="node node-108-18 rect card rounded-50 shadow-s" style={{ left: 1090, top: 6325, width: 380, height: 402, position: 'absolute' }}></div>

          <div className="node node-108-19 rect card rounded-50 shadow-s" style={{ left: 290, top: 6747, width: 380, height: 402, position: 'absolute' }}></div>
          <div className="node node-108-20 rect card rounded-50 shadow-s" style={{ left: 690, top: 6747, width: 380, height: 402, position: 'absolute' }}></div>
          <div className="node node-108-21 rect card rounded-50 shadow-s" style={{ left: 1090, top: 6747, width: 380, height: 402, position: 'absolute' }}></div>
        </div>
      </section>

      {/* CTA block and image */}
      <section className="node node-108-33 rect cta-block" style={{ left: 280, top: 7337, width: 1180, height: 600, position: 'absolute' }} aria-label="Get Started With Us"></section>
      <h2 className="node node-108-35 text cta-title" style={{ left: 380, top: 7483, width: 630, height: 96, position: 'absolute' }}>Get Started With Us</h2>
      <p className="node node-108-36 text cta-body" style={{ left: 380, top: 7609, width: 637, height: 54, position: 'absolute' }}>
        Your ceremony & reception venues, yourvision, your dress, your colours<br />and anythingelse you would like to share with us.
      </p>
      <div className="node node-108-37 group cta-elevated" style={{ left: 380, top: 7725, width: 266, height: 80, position: 'absolute' }}>
        <div className="node node-108-38 rect cta-surface-light" style={{ left: 380, top: 7725, width: 266, height: 80, position: 'absolute' }}></div>
        <div className="node node-108-39 group" style={{ left: 450, top: 7750, width: 126, height: 30, position: 'absolute' }}>
          <button className="node node-108-40 btn btn-contrast" style={{ left: 450, top: 7750, width: 126, height: 30, position: 'absolute' }}>Get in Touch</button>
        </div>
      </div>
      <img
        className="node node-108-44 image hero-cta"
        alt="Young boy sunbathing and chilling with a glass in his hand"
        src="/assets/figmaimages/figma_image_108_44.png"
        style={{ left: 1010, top: 7247, width: 568, height: 568, position: 'absolute' }}
      />

      {/* Bottom Navbar/Footer */}
      <footer className="node node-108-45 frame navbar" style={{ left: 150, top: 8037, width: 1440, height: 80, position: 'absolute' }} role="contentinfo" aria-label="Footer">
        <div className="node node-108-56 text footer-credit" style={{ left: 281, top: 8062, width: 202, height: 30, position: 'absolute' }}>Developed By Kavia</div>
        <nav className="node node-108-51 frame nav-links" style={{ left: 966, top: 8062, width: 491, height: 30, position: 'absolute' }}>
          <span className="node node-108-52 text nav-item" style={{ left: 966, top: 8062, width: 61, height: 30, position: 'absolute' }}>Home</span>
          <span className="node node-108-53 text nav-item" style={{ left: 1067, top: 8062, width: 63, height: 30, position: 'absolute' }}>Pages</span>
          <span className="node node-108-54 text nav-item" style={{ left: 1170, top: 8062, width: 120, height: 30, position: 'absolute' }}>Photograpy</span>
          <span className="node node-108-55 text nav-item" style={{ left: 1330, top: 8062, width: 127, height: 30, position: 'absolute' }}>Photoshoots</span>
        </nav>
      </footer>
    </main>
  );
}

/**
 * PUBLIC_INTERFACE
 * Default export of Home component for application routing.
 */
/**
 * PUBLIC_INTERFACE
 * Default export of Home component for application routing.
 */
export default Home;
