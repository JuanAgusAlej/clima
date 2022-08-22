import { Main } from './components/Main';
import { ClimaProvider } from './providers/ClimaProvider';

function App() {
  return (
    <ClimaProvider>
      <Main />
    </ClimaProvider>
  );
}

export default App;
