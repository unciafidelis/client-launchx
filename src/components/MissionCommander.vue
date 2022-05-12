<template>
<h4>Mission Commander</h4>
  <div v-if="currentMissionCommanderX" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommanderX.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMissionCommanderX.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMissionCommanderX.mainStack"
        />
      </div>
      <div class="form-group">
        <label for="title">Current Enrollment</label>
        <input type="checkbox" class="form-control" id="title"
          v-model="currentMissionCommanderX.currentEnrollment"
        />
      </div>
      <div class="form-group">
        <label for="title">Has Azure Certification</label>
        <input type="checkbox" class="form-control" id="title"
          v-model="currentMissionCommanderX.hasAzureCertification"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMissionCommander">
      Eliminar Mision Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMissionCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un Mission commander </p>
  </div>
</template>
<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "missioncommander-details",
  data() {
    return {
      currentMissionCommanderX: null,
      message: ''
    };
  },
  methods: {
    getMissionCommander(id) {
      MissionCommanderService.get(id)
        .then(response => {
          this.currentMissionCommanderX= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMissionCommander() {
      MissionCommanderService.delete(this.currentMissionCommanderX.id)
      .then(response => {
        console.log(response.data);
        this.message = 'Se ha eliminado el registro correctamente';
        alert(this.message)
        this.$router.push({ name: "missionCommanderX" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMissionCommander() {
      MissionCommanderService.update(this.currentMissionCommanderX.id, this.currentMissionCommanderX)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
          alert(this.message)
          this.$router.push({ name: "missionCommanderX" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMissionCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>