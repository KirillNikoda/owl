import Layout from '@modules/layout/Layout';
import { FunctionComponent } from 'react';

export const withLayout = <T extends Record<string, any>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
