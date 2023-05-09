import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaCardSkeleton: React.FC = (): any => (
  <ContentLoader
    speed={2}
    width={300}
    height={486}
    viewBox="0 0 300 486"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="523" y="23" rx="0" ry="0" width="492" height="50" />
    <rect x="524" y="106" rx="0" ry="0" width="492" height="70" />
    <rect x="526" y="318" rx="0" ry="0" width="200" height="57" />
    <rect x="0" y="301" rx="0" ry="0" width="300" height="24" />
    <rect x="10" y="341" rx="10" ry="10" width="280" height="85" />
    <rect x="0" y="445" rx="0" ry="0" width="85" height="40" />
    <rect x="168" y="443" rx="20" ry="20" width="132" height="40" />
    <circle cx="150" cy="140" r="140" />
  </ContentLoader>
);
