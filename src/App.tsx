import { Header } from '@components/header';
import { StudentsProvider } from '@contexts/students';
import { SortProvider } from '@contexts/sort';
import { StudentsView } from '@views/students-view';

export const App = () => {
  return (
    <StudentsProvider>
      <SortProvider>
        <Header />
        <StudentsView />
      </SortProvider>
    </StudentsProvider>
  );
};