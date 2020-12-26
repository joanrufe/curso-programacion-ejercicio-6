import { fireEvent, getAllByText, getByText } from "@testing-library/dom";
import app from "./app";
import empleados from "./empleados";

function mockApp() {
  document.body.innerHTML = `<div class="filter-employees">
    <input placeholder="Buscar empleados/as..." name="keyword" />
    <div class="filter-employees__results"></div>
  </div>`;
  app(empleados);
  const searchInput = document.querySelector(".filter-employees input");
  const searchResults = document.querySelector(".filter-employees__results");
  return {
    searchInput,
    searchResults
  };
}

describe("Pintar empleados", () => {
  test("Debe pintar el nombre de cada empleado", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      const reg = new RegExp(e.first_name, "i");
      expect(getAllByText(searchResults, reg)).not.toBeNull();
    });
  });

  test("Debe pintar el apellido de cada empleado", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      const reg = new RegExp(e.last_name, "i");
      expect(getAllByText(searchResults, reg)).not.toBeNull();
    });
  });
  test("Debe pintar la ocupacion de cada empleado", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      const reg = new RegExp(e.job_title, "i");
      expect(getAllByText(searchResults, reg)).not.toBeNull();
    });
  });
  test("Debe pintar la fecha de nacimiento de cada empleado", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      const reg = new RegExp(e.birthdate, "i");
      expect(getAllByText(searchResults, reg)).not.toBeNull();
    });
  });
  test("Debe pintar el avatar en un <img>", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      const res = searchResults.querySelector(`img[src="${e.avatar}"]`);
      expect(res).not.toBeNull();
    });
  });
  test("Debe pintar un enlace <a> con atr href igual al email", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      const res = searchResults.querySelector(`a[href="${e.email}"]`);
      expect(res).not.toBeNull();
    });
  });
});

describe("Filtrar empleados", () => {
  test("Debe filtrar por nombre", () => {
    const { searchResults, searchInput } = mockApp();
    const searchValue = empleados[1].first_name;
    fireEvent.input(searchInput, { target: { value: searchValue } });
    empleados.forEach((e) => {
      if (e.first_name.includes(searchValue)) {
        expect(searchResults.innerHTML).toContain(e.first_name);
      } else {
        expect(searchResults.innerHTML).not.toContain(e.first_name);
      }
    });
  });

  test("Debe filtrar por apellido", () => {
    const { searchResults, searchInput } = mockApp();
    const searchValue = empleados[1].last_name;
    fireEvent.input(searchInput, { target: { value: searchValue } });
    empleados.forEach((e) => {
      if (e.last_name.includes(searchValue)) {
        expect(searchResults.innerHTML).toContain(e.last_name);
      } else {
        expect(searchResults.innerHTML).not.toContain(e.last_name);
      }
    });
  });
  test("Debe filtrar por lugar de trabajo", () => {
    const { searchResults, searchInput } = mockApp();
    const searchValue = empleados[1].job_title;
    fireEvent.input(searchInput, { target: { value: searchValue } });
    empleados.forEach((e) => {
      if (e.job_title.includes(searchValue)) {
        expect(searchResults.innerHTML).toContain(e.job_title);
      } else {
        expect(searchResults.innerHTML).not.toContain(e.job_title);
      }
    });
  });
});
