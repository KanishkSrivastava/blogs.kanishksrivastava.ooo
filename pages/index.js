import React, { Component } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Parallax = dynamic(import("../component/Parallax"), { ssr: false });
import NavBar from "../component/NavBar";
import BlogTab from "../component/BlogTab";
export default class Index extends Component {
  render() {
    return (
      <div>
        <Head>
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
        <Parallax />
        <h1>Get it Done</h1>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l4">
              <BlogTab
                type="medium"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
              <BlogTab
                type="large"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
              <BlogTab
                type="medium"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
            </div>
            <div className="col s12 m12 l4">
              <BlogTab
                type="large"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
              <BlogTab
                type="medium"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
              <BlogTab
                type="medium"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
            </div>
            <div className="col s12 m12 l4">
              <BlogTab
                type="medium"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
              <BlogTab
                type="large"
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
              <BlogTab
                type="large "
                desc="I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
                img="static/index-BG.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
