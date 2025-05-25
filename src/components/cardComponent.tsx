import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

type Props = {
  title: string;
  subtitle?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  children?: React.ReactNode;
  variant?: 'default' | 'empty' | 'form';
};

export default function CardComponent({
  title,
  subtitle,
  onEdit,
  onDelete,
  children,
  variant = 'default'
}: Props) {
  return (
    <div className="space-y-4 mb-10">
      <div className={`
        w-full p-6 bg-white border border-gray-200 rounded-lg shadow 
        hover:shadow-lg transition-shadow
        ${variant === 'empty' ? 'text-center py-12' : ''}
      `}>
        {variant === 'empty' ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            <p className="font-normal text-gray-700 mb-4">
              {subtitle || "No items found"}
            </p>
            {children}
          </div>
        ) : variant === 'form' ? (
          <div className="space-y-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}
            </h5>
            {children}
          </div>
        ) : (
          <div className="flex h-full justify-between items-start">
            <div className="flex-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {title}
              </h5>
              {subtitle && (
                <p className="font-normal text-gray-700">
                  {subtitle}
                </p>
              )}
            </div>
            
            {(onEdit || onDelete) && (
              <div className="flex space-x-3 ml-4">
                {onEdit && (
                  <button 
                    onClick={onEdit}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Edit"
                  >
                    <TbEdit className="text-blue-500 text-xl hover:scale-110 transition-transform" />
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={onDelete}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Delete"
                  >
                    <RiDeleteBin6Line className="text-red-500 text-xl hover:scale-110 transition-transform" />
                  </button>
                )}
              </div>
            )}
          <br />
          <br />
          </div>
        )}
      </div>
    </div>
  );
}