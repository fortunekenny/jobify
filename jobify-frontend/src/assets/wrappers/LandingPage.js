// import styled from 'styled-components';

// const Wrapper = styled.section`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }
//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//     margin-bottom: 1.5rem;
//   }
//   p {
//     line-height: 2;
//     color: var(--text-secondary-color);
//     margin-bottom: 1.5rem;
//     max-width: 35em;
//   }
//   .register-link {
//     margin-right: 1rem;
//   }
//   .main-img {
//     display: none;
//   }
//   .btn {
//     padding: 0.75rem 1rem;
//   }
//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 400px;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `;
// export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
