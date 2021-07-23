import StatisticsService from "../../services/StatisticsService";

export function getStatistics(id)  {
    function onSuccess(statistics) {
        console.log("in statistics service")
        console.log(statistics)
        return { type: "GET_STATISTICS", payload: statistics};
    }
    function onFailure(error) {
        console.log("failed to load statistics", error);
    }

    return async (dispatch) => {
        try {
            console.log("Statistics action")
            let data = {serviceProviderId: id}
            let statistics = await StatisticsService.getStatistics(data);
            dispatch(onSuccess(statistics));
        } catch (e) {
            onFailure(e);
        }
    };
};



