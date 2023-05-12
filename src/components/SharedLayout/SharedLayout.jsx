import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import Header from 'components/Header/Header';
import { Loader } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense
          fallback={
            <Loader>
              <ThreeCircles
                height="80"
                width="80"
                color="tomato"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </Loader>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
