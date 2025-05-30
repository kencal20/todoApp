import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { FiCheckCircle, FiArrowLeftCircle } from "react-icons/fi";
import { componentProps } from "./types";
import { Link } from "react-router-dom";

type Props = componentProps['card'] & {
  onComplete?: () => void;
  onRestore?: () => void;
};

export default function CardComponent({
  todo,
  onEdit,
  onDelete,
  onComplete,
  onRestore,
  children,
  variant = 'default',
}: Props) {
  return (
    <div className="mb-10 space-y-4">
      <div className={`
  w-full p-6 bg-white border border-gray-200 rounded-lg shadow 
  hover:shadow-lg transition-shadow
  ${variant === 'empty' ? 'h-[70vh] flex flex-col justify-center items-center text-center space-y-4' : ''}

`}>
        {variant === 'empty' ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {todo.title}
            </h5>
            <p className="font-normal text-gray-700">
              {todo.description}
            </p>
            {children}
          </div>
        ) : variant === 'form' ? (
          <div className="space-y-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {todo.title}
            </h5>
            {children}
          </div>
        ) : (
          <div className="flex h-full justify-between items-start">
            <div className="flex-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {todo.title}
              </h5>
              {todo.description && (
                <p className="font-normal text-gray-700">
                  {todo.description.length > 100
                    ? `${todo.description.slice(0, 100)}...`
                    : todo.description}
                </p>
              )}
              {todo.priority && (
                <span className={`inline-block mt-2 px-3 py-1 text-sm font-semibold text-white rounded-full ${todo.priority === 'high' ? 'bg-red-500' :
                  todo.priority === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}>
                  {todo.priority}
                </span>
              )}
            </div>

            {(onEdit || onDelete || onComplete || onRestore) && (
              <div className="flex space-x-3 ml-4">
                {onEdit && (
                  <Link
                    to={`/edit/${todo.id}`}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Edit"
                  >
                    <TbEdit className="text-blue-500 text-xl hover:scale-110 transition-transform" />
                  </Link>
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
                {onComplete && !todo.completed && (
                  <button
                    onClick={onComplete}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Complete"
                  >
                    <FiCheckCircle className="text-green-500 text-xl hover:scale-110 transition-transform" />
                  </button>
                )}
                {onRestore && todo.completed && (
                  <button
                    onClick={onRestore}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Restore"
                  >
                    <FiArrowLeftCircle className="text-blue-500 text-xl hover:scale-110 transition-transform" />
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
