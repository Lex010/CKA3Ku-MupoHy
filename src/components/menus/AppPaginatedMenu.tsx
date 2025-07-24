import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Pagination } from '../../utils/Pagination/Pagination';

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
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = parseInt(searchParams.get('page') || '1', 10);

  return (
    <div>
      {renderTitle ? renderTitle() : title && <h1 className="page-title">{title}</h1>}
      <Pagination
        items={items}
        itemsPerPage={itemsPerPage}
        initialPage={pageParam}
        onPageChange={(newPage) => {
          if (newPage === 1) {
            searchParams.delete('page');
            setSearchParams(searchParams);
          } else {
            setSearchParams({ page: newPage.toString() });
          }
        }}
      >
        {(currentItems, controls) => (
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
        )}
      </Pagination>
    </div>
  );
};

export default AppPaginatedMenu;
