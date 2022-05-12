<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommanderX, index) in missioncommanders"
          :key="index"
          @click="setActiveMissionCommanders(missionCommanderX, index)"
        >
          {{ missionCommanderX.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMissionCommanderX">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMissionCommanderX.name}}
          <br><label><strong>Username:</strong></label> {{ currentMissionCommanderX.username}}
          <br><label><strong>mainStack:</strong></label> {{ currentMissionCommanderX.mainStack}}
          <br><label><strong>Current Enrollment:</strong></label> {{ currentMissionCommanderX.currentEnrollment}}
          <br><label><strong>Has Azure Certification:</strong></label> {{ currentMissionCommanderX.hasAzureCertification}}
        </div>
        <router-link :to="'/mcx/' + currentMissionCommanderX.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un mission commander.</p>
      </div>
    </div>
  </div>
</template>
<script>
import CommanderService from "../services/MissionCommanderService";
export default {
  name: "missionCommanderX",
  data() {
    return {
      tutorials: [],
      missioncommanders: [],
      currentTutorial: null,
      currentCommander: null,
      currentIndex: -1,
      title: "",
      commanderId: ""
    };
  },
  methods: {
    getAllMissionCommanders(){
      CommanderService.getAll()
        .then(response => {
          this.missioncommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMissionCommanders(missionCommanderX, index) {
      this.currentMissionCommanderX= missionCommanderX;
      this.currentIndex = missionCommanderX? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommanders();
  }
};
</script>