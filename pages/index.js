import React, { Component } from "react";

import Head from "next/head";
import dynamic from "next/dynamic";

const Parallax = dynamic(import("../component/Parallax"), { ssr: false });
import NavBar from "../component/NavBar";
import BlogTab from "../component/BlogTab";
import TagButton from "../component/TagButton";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagButton: "All"
    };

    this.onClickTagButtons = this.onClickTagButtons.bind(this);
  }
  onClickTagButtons(type) {
    this.setState({
      tagButton: type
    });
  }
  render() {
    return (
      <div>
        <Head>
          <meta
            name="google-site-verification"
            content="2DdkGf-dPXjMzlJR3xsPdPuoVCPt-iPo_5bDJO4hUnI"
          />
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="description"
            content="Blogs about daily challenges faced in developers life"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"
          />
          <link rel="stylesheet" href="static/styles.css" />
        </Head>
        <NavBar />
        <Parallax name="index-parallex.jpg" />
        <h1>Get it Done</h1>
        <div className="container">
          <div className="row">
            <span onClick={() => this.onClickTagButtons("All")}>
              <TagButton name="All" />
            </span>
            <span onClick={() => this.onClickTagButtons("Web Developement")}>
              <TagButton name="Web Developement" />
            </span>
            <span
              onClick={() => this.onClickTagButtons("Andorid Developement")}
            >
              <TagButton name="Andorid Developement" />
            </span>
            <span onClick={() => this.onClickTagButtons("Amazon Web Services")}>
              <TagButton name="Amazon Web Services" />
            </span>
          </div>
          <div className="row">
            <div className="col s12 m12 l4">
              <BlogTab
                type="medium"
                tag={
                  this.state.tagButton == "Andorid Developement" ||
                  this.state.tagButton == "All"
                    ? ""
                    : "hide"
                }
                tittle="React Native And Redux"
                desc="Managing state can be very though in React, it gets only worse in React Native."
                img="static/ReactNativeAndRedux.jpg"
                link="/ReactNativeAndRedux"
              />
            </div>
            <div className="col s12 m12 l4">
              <BlogTab
                tag={
                  this.state.tagButton == "Amazon Web Services" ||
                  this.state.tagButton == "All"
                    ? ""
                    : "hide"
                }
                type="large"
                tittle="Setting Up EC2"
                desc="Amazon Web Services provides free hosting for the first year, learn to know how to set up using Node.js using NGINX as a reverse proxy and next.js for server side rendering, also get a free SSL certificate form Let's Encrypt "
                img="static/AWS.jpg"
              />
            </div>
            <div className="col s12 m12 l4">
              <BlogTab
                tag={
                  this.state.tagButton == "Web Developement" ||
                  this.state.tagButton == "All"
                    ? ""
                    : "hide"
                }
                type="medium"
                tittle="SSR in React Apps"
                desc="Learn how to use Next.js, the React way. Get your SEO on point"
                img="static/NextJS.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
