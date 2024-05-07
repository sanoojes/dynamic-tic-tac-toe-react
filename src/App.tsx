import TicTacToe from "./components/TicTacToe";
import Card from "./components/ui/Card";

function App() {
  return (
    <>
      <main className="flex flex-col items-center h-screen w-screen bg-neutral-950 text-neutral-50 gap-2 pt-4 overflow-scroll">
        <Card className=" flex-col py-4 w-10/12 md:max-w-xl">
          <Card>
            <h1 className="text-3xl md:text-2xl font-bold tracking-wide">
              Tic Tac Toe
            </h1>
          </Card>
          <TicTacToe />
        </Card>
      </main>
    </>
  );
}

export default App;

