<?php

class Cinema
{
    public $dp;


    function __construct()
    {
        $this->dp = new DB_PDO_MySQL();
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
    }
/**
     * Manually wildcard routed method. all paths that begin with `all` will be
     * routed to this method
     *
     * @url GET cinema/
     */
    function index()
    {
        return $this->dp->getAllCinema();
    }
    /**
     * Manually wildcard routed method. all paths that begin with `all` will be
     * routed to this method
     *
     * @url GET cinema/{id}
     */
    function get($id)
    {
        $projet = $this->dp->getCinema($id);
        return $projet;
    }
	    /**
     * Manually wildcard routed method. all paths that begin with `all` will be
     * routed to this method
     *
     * @url GET cinema/{id}/film/
     */
    function getFilmCinema($id)
    {
        $projet = $this->dp->getFilmCinema($id);
        return $projet;
    }
    /**
     * Manually wildcard routed method. all paths that begin with `all` will be
     * routed to this method
     *
     * @url GET cinema/{id}/film/{idFilm}/horaire/
     */
    function getFilmHoraireFromCinema($id,$idFilm)
    {
        $projet = $this->dp->getFilmHoraireFromCinema($id,$idFilm);
        return $projet;
    }

}

