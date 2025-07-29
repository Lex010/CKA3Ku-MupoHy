import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '../../utils/Pagination/Pagination';
import NotFoundPage from '../../header-mainPage/NotFoundPage/NotFoundPage';

interface PageItem {
  id: string;
  title: string;
}

interface PageBlockProps {
  title?: string;
  renderTitle?: () => React.ReactNode;
  items: PageItem[];
  itemsPerPage?: number;
  renderItem?: (item: PageItem) => React.ReactNode;
  containerClassName?: string;
  basePath?: string;
}

const AppPaginatedMenu: React.FC<PageBlockProps> = ({
  title,
  renderTitle,
  items,
  itemsPerPage = 5,
  renderItem,
  containerClassName,
  basePath,
}) => {
  const navigate = useNavigate();

  return (
    <Pagination items={items} itemsPerPage={itemsPerPage} notFoundElement={<NotFoundPage />}>
      {(currentItems, controls) => (
        <div>
          {renderTitle ? renderTitle() : title && <h1 className="page-title">{title}</h1>}
          <div className={containerClassName || 'page-list'}>
            {currentItems.map((item) =>
              renderItem ? (
                renderItem(item)
              ) : (
                <div key={item.id} className="page-unit" onClick={() => navigate(`${basePath || ''}/${item.id}`)}>
                  {item.title}
                </div>
              )
            )}
            {controls}
          </div>
        </div>
      )}
    </Pagination>
  );
};

export default AppPaginatedMenu;
