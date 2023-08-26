// const cursos = ["Javascript", "HTML", "CSS", "C++", "C#"];
// const carros = ["HB20", "Tiguan", "Gol", "Onix", "Golf"];

// export default function getAll() {
//   return cursos;
// }

// export { cursos, carros };

class Cursos {
  cursos = ["Javascript", "HTML", "CSS", "C++", "C#"];

  constructor() {}

  getTodosCursos = () => {
    return this.cursos;
  };

  getCurso = (i_curso) => {
    return this.cursos[i_curso];
  };

  addCurso = (novoCurso) => {
    this.cursos.push(novoCurso);
  };

  apagarCursos = () => {
    this.cursos = [];
  };
}

export default Cursos;
