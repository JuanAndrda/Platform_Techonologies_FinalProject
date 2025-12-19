const ProjectCardSkeleton = () => {
  return (
    <div className="bg-dark-secondary rounded-lg overflow-hidden border border-dark-border animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800">
        <div className="absolute inset-0 shimmer" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Category Badge Skeleton */}
        <div className="mb-3">
          <div className="h-6 w-20 bg-gray-700 rounded-full" />
        </div>

        {/* Title Skeleton */}
        <div className="h-6 bg-gray-700 rounded mb-3 w-3/4" />

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-700 rounded w-4/6" />
        </div>

        {/* Technologies Skeleton */}
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-16 bg-gray-700 rounded-full" />
          <div className="h-6 w-20 bg-gray-700 rounded-full" />
          <div className="h-6 w-24 bg-gray-700 rounded-full" />
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="px-6 pb-6">
        <div className="h-12 bg-gray-700 rounded-md" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectCardSkeleton;
