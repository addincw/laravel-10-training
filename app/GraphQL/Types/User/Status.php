<?php

namespace App\GraphQL\Types\User;

final class Status
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        return 'active';
    }
}
