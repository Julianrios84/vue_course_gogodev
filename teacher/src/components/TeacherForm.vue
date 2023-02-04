<template>
  <section>
    <h3>Profesor</h3>
    <div>
      <label>Nombres:</label>
      <input type="text" v-model="teacher.name" />
    </div>
    <div>
      <label>Apellidos:</label>
      <input type="text" v-model="teacher.surname" />
    </div>
    <div>
      <label>DNI / NIF:</label>
      <input type="text" v-model="teacher.dni" />
    </div>
    <div>
      <label>Materias:</label>
      <input type="text" v-model="subject" />
      <button @click="handleSubject">Agregar</button>
    </div>
    <div>
      <ul>
        <li v-for="(elem, index) in teacher.subjects" :key="index">
        {{ elem }}
        </li>
      </ul>
    </div>
    <input type="checkbox" v-model="teacher.doc" /> Documentación Entregada
    <button @click="handleAddTeacher">Añadir</button>
  </section>

  <section>
    <h3>Listado de profesores</h3>
    <table aria-describedby="" >
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>DNI / NIF</th>
          <th>Materias</th>
          <th>Documentación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="elem in teachers" :key="elem.dni">
          <td>{{ elem.name }}</td>
          <td>{{ elem.surname }}</td>
          <td>{{ elem.dni }}</td>
          <td>
            <ul>
              <li v-for="(item, index) in elem.subjects" :key="index">
                {{ item }}
              </li>
            </ul>
          </td>
          <td v-if="elem.doc">Entregada</td>
          <td v-else>No Entregada</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

interface ITeacher {
  name: string;
  surname: string;
  dni: string;
  subjects: Array<string>;
  doc: boolean;
}

let teacher: Ref<ITeacher> = ref({
  name: "",
  surname: "",
  dni: "",
  subjects: [],
  doc: false,
});

let teachers: Ref<Array<ITeacher>> = ref([]);
let subject: Ref<string> = ref("");

const  handleSubject = () =>  {
  teacher.value.subjects.push(subject.value)
  subject.value = "";
}

const handleAddTeacher = () => {
  teachers.value.push({
    name: teacher.value.name,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    subjects: teacher.value.subjects,
    doc: teacher.value.doc
  });
  teacher.value.name = "";
  teacher.value.surname = "";
  teacher.value.dni = "";
  teacher.value.subjects = [];
  teacher.value.doc = false;
}

</script>

<style scoped></style>
