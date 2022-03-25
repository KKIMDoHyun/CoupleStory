import React from "react";
import { observer } from "mobx-react";

const IntroductionScreen: React.FC = observer((props: any) => {
  return (
    <>
      <div style={{ background: "pink", height: "100vh" }}>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </div>
    </>
  );
});

export default IntroductionScreen;
