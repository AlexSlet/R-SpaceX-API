import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      lastLaunch: {},
      nextLaunch: {}
    },
    mutations: {
      setLastLaunch (state, launch) {
        state.lastLaunch = {
          missionName: launch.mission_name,
          rocket: launch.rocket.rocket_name,
          missionImage: launch.links.mission_patch_small,
          payload: launch.rocket.second_stage.payloads[0].payload_type,
          payloadMass: launch.rocket.second_stage.payloads[0].payload_mass_kg,
          missionDetails: launch.details,
          missionImages: launch.links.flickr_images,
          links: {
            wiki: launch.links.wikipedia,
            youtube: launch.links.video_link,
            reddit: launch.links.reddit_campaign
          }
        }
      },
      setNextLaunch (state, launch) {
        state.nextLaunch = {
          launchDate: launch.launch_date_local,
          missionName: launch.mission_name,
          rocket: launch.rocket.rocket_name,
          payload: launch.rocket.second_stage.payloads[0].payload_type,
          payloadMass: launch.rocket.second_stage.payloads[0].payload_mass_kg,
          missionDetails: launch.details
        }
      }
    }
  })
}

export default createStore
