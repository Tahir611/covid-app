import React, { useEffect, useState } from "react";
import "../Cards/cards.css";
import CountUp from "react-countup";

const Cards = (props) => {
  const [data, setData] = useState([
    {
      confirm: "",
      recovered: "",
      deaths: "",
      update: "",
    },
  ]);

 
  const getCovidApi = async () => {
    try {
      const res = await fetch("https://covid19.mathdro.id/api");
      const covData = await res.json();
      // console.log(covData.confirmed);

      setData({
        confirm: covData.confirmed.value,
        recovered: covData.recovered.value,
        deaths: covData.deaths.value,
        update: covData.lastUpdate,
      });

      props.setChart(data);

      // setData(newww)
      // console.log(covData)
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    getCovidApi();
  }, []);

  //   return (
  //     <div className='container'>
  //         <div className="cards">
  //       <Grid container spacing={3}>
  //         <Grid
  //           item
  //           component={Card}
  //           xs={12}
  //           md={3}
  //         //   className={cx(styles.card, styles.infected)}
  //         >
  //           <CardContent>
  //             <Typography color="textSecondary" gutterBottom>
  //               Infected
  //             </Typography>
  //             <Typography varient="h5">
  //               <CountUp start={0} end={data.confirm} duration={2.5} separator="," />
  //             </Typography>
  //             <Typography color="textSecondary">
  //               {new Date(data.update).toDateString()}
  //             </Typography>
  //             <Typography varient="body2">
  //               Number of active cases of covid 19
  //             </Typography>
  //           </CardContent>
  //         </Grid>

  //         <Grid
  //           item
  //           component={Card}
  //           xs={12}
  //           md={3}
  //         //   className={cx(styles.card, styles.recovered)}
  //         >
  //           <CardContent>
  //             <Typography color="textSecondary" gutterBottom>
  //               Recovered
  //             </Typography>
  //             <Typography varient="h5">
  //               <CountUp start={0} end={data.recovered} duration={2.5} separator="," />
  //             </Typography>
  //             <Typography color="textSecondary">
  //               {new Date(data.update).toDateString()}
  //             </Typography>
  //             <Typography varient="body2">
  //               Number of revcoveries from covid 19
  //             </Typography>
  //           </CardContent>
  //         </Grid>

  //         <Grid
  //           item
  //           component={Card}
  //           xs={12}
  //           md={3}
  //         //   className={cx(styles.card, styles.deaths)}
  //         >
  //           <CardContent>
  //             <Typography color="textSecondary" gutterBottom>
  //               Deaths
  //             </Typography>
  //             <Typography varient="h5">
  //               <CountUp start={0} end={data.deaths} duration={2.5} separator="," />
  //             </Typography>
  //             <Typography color="textSecondary">
  //               {new Date(data.update).toDateString()}
  //             </Typography>
  //             <Typography varient="body2">
  //               Number of deaths caused by covid 19
  //             </Typography>
  //           </CardContent>
  //         </Grid>
  //       </Grid>
  //         </div>
  //     </div>
  //   );

  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body confirmed-border">
                <h3 className="card-title">Infected</h3>
                <h6>
                  <CountUp
                    start={0}
                    end={props.isCountry ? props.confirm : data.confirm}
                    duration={2.5}
                    separator=","
                  />
                </h6>
                <p className="card-text">
                  {new Date(data.update).toDateString()}
                </p>
                <p className="card-text">Infected cases by covid 19</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body recovered-border">
                <h3 className="card-title">Recovered</h3>
                <h6>
                  <CountUp
                    start={0}
                    end={props.isCountry ? props.recovered : data.recovered}
                    duration={2.5}
                    separator=","
                  />
                </h6>
                <p className="card-text">
                  {new Date(data.update).toDateString()}
                </p>
                <p className="card-text">Recovered cases by covid 19</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body death-border">
                <h3 className="card-title">Deaths</h3>
                <h6>
                  <CountUp
                    start={0}
                    end={props.isCountry ? props.deaths : data.deaths}
                    duration={2.5}
                    separator=","
                  />
                </h6>
                <p className="card-text">
                  {new Date(data.update).toDateString()}
                </p>
                <p className="card-text">Deaths cases by covid 19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
