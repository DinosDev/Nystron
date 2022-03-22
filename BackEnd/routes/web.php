<?php

use Laravel\Lumen\Routing\Router;

/** @var Router $router */

$router->group(['prefix' => 'api/v1'], function () use ($router) {
    $router->post('/message', "MessageController@store");
});
