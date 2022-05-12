<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="missionCommanderX.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="missionCommanderX.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="missionCommanderX.mainStack"
          name="mainStack"
        />
      </div>
       <div class="form-group">
        <label for="title">Current Enrollment</label>
        <input
          type="checkbox"
          class="form-control"
          id="currentEnrollment"
          required
          v-model="missionCommanderX.currentEnrollment"
          name="currentEnrollment"
        />
      </div>
       <div class="form-group">
        <label for="title">has Azure Certification</label>
        <input
          type="checkbox"
          class="form-control"
          id="hasAzureCertification"
          required
          v-model="missionCommanderX.hasAzureCertification"
          name="hasAzureCertification"
        />
      </div>
      <button @click="saveMissionCommander" class="btn btn-success">Guardar</button>
    </div>
    <div v-else>
      <h4> Mission Commander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMissionCommander">Nuevo Mission commander</button>
    </div>
  </div>
</template>

<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "add-missionCommanderX",
  data() {
    return {
      missionCommanderX: {
        id: null,
        name: "",
        username: "",
        mission: ""
      },
      submitted: false
    };
  },
  methods: {
    saveMissionCommander() {
      var data = {
        name: this.missionCommanderX.name,
        username: this.missionCommanderX.username,
        mainStack: this.missionCommanderX.mainStack,
        currentEnrollment: this.missionCommanderX.currentEnrollment,
        hasAzureCertification: this.missionCommanderX.hasAzureCertification 
      };
      MissionCommanderService.create(data)
        .then(response => {
          this.missionCommanderX.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMissionCommander() {
      this.submitted = false;
      this.missionCommanderX = {};
    }
  }
};
</script>