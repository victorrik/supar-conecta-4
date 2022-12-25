//@ts-check
import { Link } from "wouter";
import { Icons, Tooltip } from "../components";
import useScreenType from "../hooks/useScreenType";


function Home() {
	const screenType = useScreenType()
  return (
    <main className="w-screen h-screen flex justify-center items-center p-5 md:p-10">
      <div className="shadow-2xl p-5 w-full max-w-lg md:p-8 rounded-md bg-blue-chill-700 text-white">
        <h1 className="text-3xl font-bold text-center mb-2">Conecta 4</h1>
        <p className="text-lg text-center mb-4">
          Selecciona el modo que deseas jugar
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Tooltip title={`Juega en tu ${screenType === 'sm'?"movil":"equipo"} sin necesidad de internet`} placement="top">
            <Link
              to="local"
              className="transition-all shadow-lg hover:bg-blue-chill-500 bg-blue-chill-600 rounded-lg py-3 flex items-center justify-center flex-col"
            >
              <h2 className="text-2xl font-medium" >Local </h2>
              <div className="text-2xl flex items-center gap-2">
                <Icons name="people" />
              </div>
            </Link>
          </Tooltip>

          <Tooltip title="Proximamente" placement="top">
            <div className="shadow-lg bg-blue-chill-600 rounded-lg py-3 flex items-center justify-center flex-col">
              <h2 className="text-2xl font-medium" >En linea</h2>
              <div className="text-2xl flex items-center gap-2">
                <Icons name="person-workspace" />
                <Icons name="hdd-network" />
                <Icons name="person-workspace" />
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </main>
  );
}

export default Home;
