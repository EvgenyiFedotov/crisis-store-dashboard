import styled from "styled-components";
import { getStepStatic } from "../../lib/styled";

const H1 = styled.h1`
  font-weight: lighter;
  font-size: ${getStepStatic(6)};
  letter-spacing: -1.5px;
`;

const H2 = styled.h2`
  font-weight: lighter;
  font-size: ${getStepStatic(3.75)};
  letter-spacing: -0.5px;
`;

const H3 = styled.h3`
  font-weight: normal;
  font-size: ${getStepStatic(3)};
  letter-spacing: 0px;
`;

const H4 = styled.h4`
  font-weight: normal;
  font-size: ${getStepStatic(2.125)};
  letter-spacing: 0.25px;
`;

const H5 = styled.h5`
  font-weight: normal;
  font-size: ${getStepStatic(1.5)};
  letter-spacing: 0px;
`;

const H6 = styled.h6`
  font-weight: 500;
  font-size: ${getStepStatic(1.25)};
  letter-spacing: 0.15px;
`;

const Subtitle1 = styled.div`
  font-weight: normal;
  font-size: ${getStepStatic(1)};
  letter-spacing: 0.15px;
`;

const Subtitle2 = styled.div`
  font-weight: 500;
  font-size: ${getStepStatic(0.875)};
  letter-spacing: 0.1px;
`;

const Body1 = styled.div`
  font-weight: normal;
  font-size: ${getStepStatic(1)};
  letter-spacing: 0.5px;
`;

const Body2 = styled.div`
  font-weight: normal;
  font-size: ${getStepStatic(0.875)};
  letter-spacing: 0.25px;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: ${getStepStatic(0.875)};
  letter-spacing: 1.25px;
`;

const Caption = styled.div`
  font-weight: normal;
  font-size: ${getStepStatic(0.75)};
  letter-spacing: 0.4px;
`;

const Overline = styled.div`
  font-weight: normal;
  font-size: ${getStepStatic(0.625)};
  letter-spacing: 1.5px;
`;

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Button,
  Caption,
  Overline,
};
